import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './Icon_new.scss'

class Icon extends Component {
    static propTypes = {
        icon: React.PropTypes.string,
        size: React.PropTypes.string,
        color: React.PropTypes.string
    }

    static defaultProps = {
        icon: 'info',
        size: '16',
        color: '#a3a4a6'
    }

    render () {
        const {
            currentColor,
            icon, 
            size, 
            color, 
            ...others
        } = this.props

        const icons = {
            "add": "M14 14H4v4h10v10h4V18h10v-4H18V4h-4v10z",
            "archive": "M2.5 12.495L16 1.5l13.5 10.995L15.99 23.55 2.5 12.494zm13.49 15.11l11.432-9.352 2.077 1.693L15.99 31 2.5 19.946l2.077-1.693 11.413 9.35z",
            "arrowBack": "M16 4l2.5 2.5-8.117 7.667H28V17.5H10.383l8.117 8L16 28 4 15.833",
            "arrowForward": "M16 4l-2.5 2.5 8.117 7.667H4V17.5h17.617l-8.117 8L16 28l12-12.167",
            "bookmark": "M6 7.008C6 5.348 7.343 4 8.994 4h14.012C24.66 4 26 5.343 26 7.008V30l-10-5-10 5V7.008z",
            "bookmarkBorder": "M23 7H9v18.146l7-3.5 7 3.5V7zM6 6.983C6 5.335 7.343 4 8.994 4h14.012C24.66 4 26 5.325 26 6.983V30l-10-5-10 5V6.983z",
            "button": "M24 20h1c.556 0 1-.444 1-.99V14h-2v4H14v-2h-2v2.99c0 .567.448 1.01 1 1.01h11zM8 18v-4H6v5c0 .556.452 1 1.01 1H10v-2H8zM0 7.99C0 5.786 1.79 4 4.004 4h23.992C30.206 4 32 5.784 32 7.99v16.02c0 2.204-1.79 3.99-4.004 3.99H4.004C1.794 28 0 26.216 0 24.01V7.99zM16 12v4h2v-2.99c0-.567-.448-1.01-1-1.01h-1zM6 13v1h10v-2H6.995c-.54 0-.995.448-.995 1zm14-1v2h6v-1c0-.556-.444-1-.99-1H20z",
            "cancel": "M13.525 16l-7.248 7.248 2.475 2.475L16 18.475l7.248 7.248 2.475-2.475L18.475 16l7.248-7.248-2.475-2.475L16 13.525 8.752 6.277 6.277 8.752 13.525 16z",
            "create": "M4 23v5h5l15-15-5-5L4 23zM27.613 9.387c.52-.52.52-1.36 0-1.88l-3.12-3.12c-.52-.52-1.36-.52-1.88 0l-2.44 2.44 5 5 2.44-2.44z",
            "dateRange": "M25 6h2.004C28.658 6 30 7.342 30 8.99v18.02c0 1.65-1.35 2.99-2.996 2.99H4.996C3.342 30 2 28.658 2 27.01V8.99C2 7.34 3.35 6 4.996 6H7V2h3v4h12V2h3v4zM5 12v15h22V12H5zm3.5 3.02h3v3h-3v-3zm6 0h3v3h-3v-3zm6 0h3v3h-3v-3zM8.5 21h3v3h-3v-3zm6 0h3v3h-3v-3zm6 0h3v3h-3v-3z",
            "delete": "M28 6v4h-4v20H8V10H4V6h6V2h12v4h6zm-10 6v14h2V12h-2zm-6 0v14h2V12h-2z",
            "download": "M26 12L16 22 6 12h6V2h8v10h6zm-2 10h4v8H4v-8h4v4h16v-4z",
            "group": "M9.5 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM23 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-11.8 3c5.8 0 8.3 4.372 8.3 8v.99H0V27c0-3.628 2.5-8 8-8h3.2zM24 19c5.5 0 8 3.964 8 8v1h-9v-1c0-2.022 0-6-3-8h4z",
            "groupAdd": "M4 15v-4h3v4h4v3H7v4H4v-4H0v-3h4zm24 13c0-3.584-1.57-6.8-4.063-9H24c6.746 0 8 3.964 8 8v1h-4zm-6.48-12.223c.467.145.964.223 1.48.223 2.76 0 5-2.24 5-5s-2.24-5-5-5c-.516 0-1.013.078-1.48.223C22.742 7.445 23.5 9.133 23.5 11c0 1.866-.757 3.555-1.98 4.777zM17.2 19c5.8 0 8.3 4.372 8.3 8v.99H8V27c0-3.628 2.5-8 8-8h1.2zm-.7-3c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
            "image": "M0 6.005C0 4.898.89 4 2.002 4h27.996C31.104 4 32 4.897 32 6.005v19.99C32 27.102 31.11 28 29.998 28H2.002C.896 28 0 27.103 0 25.995V6.005zM2 10v16h28L2 10zm23 4c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z",
            "info": "M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16zm15 3c0-.408.424-.728 2-2 1.44-1.162 3-2.094 3-4.5 0-1.77-.642-3.156-1.758-4.058C19.106 7.522 17.794 7 16 7c-2.118 0-3.746.7-4.872 1.878C9.834 10.23 10 11.676 10 13h3v-.558c0-.564.112-1.416 1-2 .428-.282 1.21-.434 2.002-.442.762-.008 1.53.12 1.998.442.94.65 1 1.348 1 2.058 0 .776-.672 1.526-2 2.5-2.012 1.476-3 2.036-3 3v2.488h3.004S17 19.504 17 19zm-3.25 6h3.5v-3h-3.5v3z",
            "personAdd": "M5 13V8h3v5h5v3H8v5H5v-5H0v-3h5zm16.5 2c-3.038 0-5.5-2.462-5.5-5.5S18.462 4 21.5 4 27 6.462 27 9.5 24.538 15 21.5 15zm1.562 3C29.308 18 32 22.848 32 26.872v1.1H11v-1.1C11 22.848 13.692 18 19.615 18h3.447z",
            "report": "M5 3.99C5 2.893 5.896 2 7.01 2h11.808L27 9.998v18.01c0 1.1-.89 1.992-1.99 1.992H6.99C5.89 30 5 29.1 5 28.01V3.99zM9 17v3h14v-3H9zm0 6v3h14v-3H9zm8.003-19L17 10.66h7.164L17.004 4z",
            "search": "M20.6 18.6c1.4-1.8 2-3.8 2-6.2C22.8 6.6 18.2 2 12.4 2 6.6 2 2 6.6 2 12.4c0 5.8 4.6 10.4 10.4 10.4 2.4 0 4.6-.8 6.2-2L28 30l2-2-9.4-9.4zm-8.2 1c-4 0-7.2-3.2-7.2-7.2s3.2-7.2 7.2-7.2 7.2 3.2 7.2 7.2-3.2 7.2-7.2 7.2z",
            "sort": "M30 6v4H2V6h28zm0 8v4H2v-4h28zm-8 8v4H2v-4h20z",
            "star": "M11.5 11l3.68-8.177c.453-1.007 1.188-1.005 1.64 0L20.5 11l9.008 1.12c1.1.136 1.316.84.485 1.565l-6.76 5.915 2.574 9.438c.29 1.065-.234 1.473-1.192.898L16 24.766l-8.615 5.17c-.95.57-1.485.176-1.192-.898L8.767 19.6l-6.76-5.915c-.832-.728-.625-1.428.485-1.566L11.5 11z",
            "starBorder": "M13.305 13.42l-6.607.82 5.078 4.443-1.79 6.564 6.012-3.607 6.012 3.607-1.79-6.564 5.078-4.443-6.607-.82L16 7.434l-2.693 5.984zM11.2 10.564l3.95-8.783c.47-1.04 1.225-1.045 1.695 0l3.952 8.783 9.688 1.203c1.13.14 1.352.86.488 1.616l-7.26 6.352 2.76 10.12c.3 1.107-.247 1.527-1.225.94l-9.25-5.55-9.25 5.55c-.978.587-1.533.19-1.224-.94l2.76-10.12-7.26-6.352c-.86-.752-.636-1.476.487-1.616l9.69-1.203z",
            "text": "M28 6.5V4H4v6h2V7h8v21h-2v2h8v-2h-2V7h8v3h2V6.5z",
            "time": "M17 16.366l6.19 3.574-1.5 2.598-7.69-4.44.057-.098H14V8h3v8.366zM16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-3.28c6.472 0 11.72-5.248 11.72-11.72S22.47 4.28 16 4.28 4.28 9.53 4.28 16 9.53 27.72 16 27.72z",
            "triangleLeft": "M10.8 16l7.8-7c.4-.6 1.4 0 1.4.6v14c0 .8-1 1.2-1.6.6l-7.6-6.8c-.4-.4-.4-1 0-1.4z",
            "triangleRight": "M21.2 16l-7.6-7c-.6-.6-1.6 0-1.6.6v14c0 .8 1 1.2 1.6.6l7.8-7c.2-.2.2-.8-.2-1.2z",
            "videocam": "M24 12.667V7.99C24 6.9 23.102 6 21.995 6H2.005C.897 6 0 6.89 0 7.99v16.02C0 25.1.898 26 2.005 26h19.99C23.103 26 24 25.11 24 24.01v-4.677l6.468 5.39c.844.703 1.532.386 1.532-.714V7.99c0-1.092-.686-1.418-1.532-.713L24 12.667z",
        }

        let symbol

        if(icon === "loading") {
            symbol = <g style={{opacity: ".7"}}>
                <rect fill="currentColor" x="14.5" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(30 22 5.608)" x="20.5" y="1.608" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(60 26.392 10)" x="24.892" y="6" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(90 28 16)" x="26.5" y="12" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(120 26.392 22)" x="24.892" y="18" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(150 22 26.392)" x="20.5" y="22.392" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" x="14.5" y="24" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(30 10 26.392)" x="8.5" y="22.392" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(60 5.608 22)" x="4.108" y="18" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(90 4 16)" x="2.5" y="12" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(120 5.608 10)" x="4.108" y="6" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
                </rect>
                <rect fill="currentColor" transform="rotate(150 10 5.608)" x="8.5" y="1.608" width="3" height="8" rx="1.5">
                    <animate attributeName="fill-opacity" dur="850ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
                </rect>
            </g>
        }
        else {
            symbol = <path className={styles.path} d={icons[icon]} />
        }

        const fill = currentColor ? 'currentColor' : color

        return (
            <svg
                width = {size} 
                height = {size}
                aria-hidden="true"
                data-role = { "icon_" + icon} 
                viewBox="0 0 32 32" 
                fill={fill}
                {...others}
            >
                {symbol}
            </svg>
        )
    }
}

module.exports = Icon
