import { Button } from 'antd';
import React, { useRef, useState } from 'react';
//import { CreateLogin } from './createLogin';
import { LoginForm } from './loginForm';
import './login.scss';
import { LoginTitle } from './logintitle';
import { createFormVar, loginFormVar } from './loginconstant';

export const Login = ({ history }) => {
    const [{ signUp }, setUser] = useState({
        signUp: false
    });

    let useref = useRef();

    const handleClick = () => {
        let position = document.querySelector('.left_pane').style.left || '0px';
        switch (position) {
            case '0px':
                let Inc = 0;
                animate(Inc, 'moveLeft', 0);
                break;
            case '560px':
                let Dec = 560
                animate(Dec, 'moveRight', 280);
                break;
            default:
                break;
        }
    }

    const animate = (count, pos, rightPos) => {
        let setCount = setInterval(() => {
            if (count === (pos === 'moveLeft' ? 560 : 0)) {
                setUser(state => ({
                    ...state,
                    signUp: !state.signUp
                }))
                clearInterval(setCount);
            }
            else {
                document.querySelector('.left_pane').style.left = (pos === 'moveLeft' ? ++count : --count) + 'px';

            }
            if ((pos === 'moveLeft' && rightPos !== 280) || (pos === 'moveRight' && rightPos !== 0)) {
                document.querySelector('.right_pane').style.right = (pos === 'moveLeft' ? ++rightPos : --rightPos) + 'px';
            }

        }, 2)
    }

    return (
        <div className="Container" >
            {/* <Button type="primary" onClick={() =>
                history.push('Dashboard')
            }>  
                Click Dashboard
            </Button> */}
            <div className="left_pane">
                <LoginTitle message={!signUp ? loginFormVar : createFormVar} handleClick={handleClick} />
            </div>
            <div className="right_pane">
                <LoginForm ref={useref} status={signUp} />
            </div>

        </div>
    )
}