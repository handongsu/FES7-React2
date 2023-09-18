import React from "react";

const Homepage = ({setLogin}) => {
    return(
        <main>
            <h1>홈페이지에 오신 것을 환영합니다.</h1>
            <button onClick={() => setLogin(true)}>로그아웃</button>
        </main>
    )
}

export default Homepage;