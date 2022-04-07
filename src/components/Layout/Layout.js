import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.scss';

export default function layout(props) {
    return(
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className='m-t'>
                {props.children}
            </main>
        </Aux>
        
    );
}
