var fs = require('fs-extra');
var cheerio = require('cheerio');
var camelcase = require('camelcase');
var capitalize = require('capitalize');
var _ = require('underscore');
var glob = require('glob');
var path = require('path');

var attrs = [
    'xlink:href',
    'clip-path',
    'fill-opacity',
    'fill'
];
var cleanAtrributes = function($el, $) {
    _.each(attrs, function(attr) {
        $el.removeAttr(attr);
    });
    if($el.children().length === 0) {
        return false;
    }

    $el.children().each(function(index, el) {
        cleanAtrributes($(el), $);
    });
};


var components = {};
var types = {};

var rootDir = path.join(__dirname, '..');
var sourceDir = path.resolve(rootDir, 'svgicon-sources')
var svgIconDistDir = path.resolve(rootDir, 'src/svgicons')

glob(sourceDir + '/*/*.svg', function(err, icons) {
    icons.forEach(function(iconPath){
        var id = path.basename(iconPath, '.svg');
        var svg = fs.readFileSync(iconPath, 'utf-8');
        $ = cheerio.load(svg,{
            xmlMode: true
        });
        var $svg = $('svg');
        cleanAtrributes($svg, $);
        $svg.find('title').remove()
        var iconSvg = $svg.html();
        
        // replace since React JSX validation
        iconSvg = iconSvg.replace(/fill\-rule/g, 'fillRule')

        if($svg.children().length > 1)
            iconSvg = `<g>${iconSvg}</g>`
        // console.log($svg.children().length, 'length')
        var viewBox = $svg.attr('viewBox');

        var folder = iconPath.replace(sourceDir + '/', '').replace( '/' + path.basename(iconPath), '');
        // console.log('folder', path.dirname(iconPath), folder)
        var type = capitalize(camelcase(folder));
        var name = 'Icon' + type + capitalize(camelcase(id));
        var location = iconPath.replace(sourceDir, '').replace(id + '.svg', name + '.js');

        // components[name] = location;
        // if (!types[folder]) {
        //     types[folder] = {};
        // }
        // types[folder][name] = location;
        var component = `
import React from 'react'
import Icon from '../ReactIconBase'

const ${name} = props => (
    <Icon 
        viewBox="${viewBox}" 
        aria-hidden="true"
        data-role="icon"
        {...props}>
        ${iconSvg}
    </Icon>
)

export default ${name}
`

        fs.ensureDirSync(path.join(svgIconDistDir, folder))
        fs.writeFileSync(path.join(svgIconDistDir, location), component, 'utf-8');
        // console.log(path.join('.', location));
    });
    // _.each(types, function(components, folder) {
    //     var iconsModule = _.map(components, function(loc, name){
    //         loc = loc.replace('.js', '');
    //         loc = loc.replace('/'+folder, '');
    //         loc = "." + loc;
    //         return `export ${name} from '${loc}';`;
    //     }).join('\n') + '\n';
    //     fs.writeFileSync(path.join(svgIconDistDir, folder , 'index.js'), iconsModule, 'utf-8');
    //     console.log(path.join('.', folder, 'index.js'));
    // });
});


