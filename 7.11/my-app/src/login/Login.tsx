import React, { useEffect } from 'react'
import "./login.css"
import {Link} from "react-router-dom";
import { KAKAO_AUTH_URL } from './oauth/OAuth';

const Login:React.FC = () => {
    useEffect(() => {
        console.log('KAKAO_AUTH_URL:', KAKAO_AUTH_URL);
    }, []);

    return (
        <section className="user">
            <h3>로그인</h3>
            <form className="userForm">
                <section className="inputGroup">
                    <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder="이메일 또는 전화번호"
                    />
                    <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    placeholder="비밀번호"
                    />
                    <Link to="/home" className="btn btn-primary btn-lg">로그인</Link>
                </section>
                <a href={KAKAO_AUTH_URL} className="kakaobtn">
                    <img src={process.env.PUBLIC_URL + `/assets/kakao_login.png`} />
                </a>
            </form>
            <section className="divider"></section> {/* 구분선 추가 */}
            <section className="signup">
                <Link to="/signup" className="btn btn-success btn-lg">새 계정 만들기</Link>
            </section>
        </section>
    )
}

export default Login