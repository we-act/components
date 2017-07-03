
import React from 'react'
import Icon from '../ReactIconBase'

const IconMpLoading = props => (
    <Icon 
        viewBox="0 0 32 32" 
        aria-hidden="true"
        data-role="icon"
        {...props}>
        
    <g fillOpacity="0.7">
        <rect x="14.5" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(30 22 5.608)" x="20.5" y="1.608" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(60 26.392 10)" x="24.892" y="6" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(90 28 16)" x="26.5" y="12" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(120 26.392 22)" x="24.892" y="18" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(150 22 26.392)" x="20.5" y="22.392" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"/>
        </rect>
        <rect x="14.5" y="24" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(30 10 26.392)" x="8.5" y="22.392" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(60 5.608 22)" x="4.108" y="18" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(90 4 16)" x="2.5" y="12" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(120 5.608 10)" x="4.108" y="6" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"/>
        </rect>
        <rect transform="rotate(150 10 5.608)" x="8.5" y="1.608" width="3" height="8" rx="1.5">
            <animate attributeName="fill-opacity" dur="850ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"/>
        </rect>
    </g>

    </Icon>
)

export default IconMpLoading
