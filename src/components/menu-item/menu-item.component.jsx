import React from "react";
import {useNavigate} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let navigate = useNavigate();
    // console.log()
    return(
        <div className={`${size} menu-item`} onClick={()=>navigate(`${linkUrl}`)}>
            <div className="background-image"
                style = {{
                    backgroundImage: `url('${imageUrl}')`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="sub-title">show now</p>
            </div>
        </div>
    );
}

export default MenuItem;