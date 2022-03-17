import React from 'react'
import {Button, Intent} from "@blueprintjs/core"
import {Icon} from "@blueprintjs/core"


const NavigationBar = ({ func, GetSearch }) => {
    return (
        <nav className="bp3-navbar" style={{ background: "#6B9FA1" }} >
            <input
                type="text"
                placeholder='SearchInput'
                className='bp3-input bp3-intent-primary bp3-large'
                onChange={e => GetSearch(e.target.value)}
            ></input>
            <Button style={{ margin: 10 }} className='bp3-button' intent={Intent.PRIMARY} onClick={func}><Icon icon="plus" color='black' /></Button>
        </nav>
    );
};

export default NavigationBar;