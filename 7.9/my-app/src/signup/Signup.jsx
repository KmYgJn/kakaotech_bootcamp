import React from 'react'
import { Link } from 'react-router-dom';
import "./signup.css"


const Signup = () => {

    return (
        <section className="addUser">
            <h3>새 계정 만들기</h3>
            <form className="addUserForm">
                <section className="inputGroup">
                    <input
                    type="text"
                    id="name"
                    autoCompelete="off"
                    placeHolder="이름"
                    />
                    <input
                    type="email"
                    id="email"
                    autoCompelete="off"
                    placeHolder="이메일"
                    />
                    <input
                    type="password"
                    id="password"
                    autoCompelete="off"
                    placeHolder="비밀번호"
                    />
                    <Link to="/?signupSuccess=true" type="submit" class="btn btn-success btn-lg">가입하기</Link>
                </section>
            </form>
            <section className="divider"></section> {/* 구분선 추가 */}
            <section className="back">
                <p>알고보니 계정이 있음?</p>
                <Link to="/" className="link-text">돌아가기</Link>
            </section>
        </section>
    )
}

export default Signup