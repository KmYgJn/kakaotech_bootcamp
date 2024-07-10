import React from 'react'
import "./login.css"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="addUser">
            <h3>로그인</h3>
            <form className="addUserForm">
                <section className="inputGroup">
                    <input
                    type="email"
                    id="email"
                    autoCompelete="off"
                    placeHolder="이메일 또는 전화번호"
                    />
                    <input
                    type="password"
                    id="password"
                    autoCompelete="off"
                    placeHolder="비밀번호"
                    />
                    <Link to="/home" type="submit" class="btn btn-primary btn-lg">로그인</Link>
                </section>
            </form>
            <section className="divider"></section> {/* 구분선 추가 */}
            <section className="signup">
                <Link to="/signup" type="submit" class="btn btn-success btn-lg">새 계정 만들기</Link>
            </section>
        </section>
    )
}

export default Login