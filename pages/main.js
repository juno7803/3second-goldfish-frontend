import React from 'react';
import styled from "@emotion/styled";



const MainWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

    .container{
        margin-top:60px;
    }


    .main__title{
        color: black;
        font-size:50px;
        line-height: 104px;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .main__title--sub1{
        color: #0D0C22;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;
        

    }
    .main__title--sub2{
        color: #0D0C22;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;

    }

    .game__start{
        border: 1px solid white;
        border-radius: 20px;
        background: #FFAF02;
        height: 4rem;
        font-size: 1.5rem;
        font-size: 18px;
        padding: 0 80px;
        color: white;
        margin-top: 50px;
        cursor:pointer;
        font-family: 'Noto Sans KR', sans-serif;


    }

    .footer{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        color: #767676;
        bottom:0;
        width:100%;
        margin-top: 40px;

    }

`;

function Main() {
	return (
    <MainWrap>
        <div className="header">
            <section className="container">
            <img
                src="/assets/images/MainLogo.png"
                alt=""
                width={200}
                height={200}
                
            />
                <div className="main_titles">  
                    <div className="main__title">오늘 뭐했붕어?</div>
                    <div className="main__title--sub1">삼...이...일....땡!!! 오늘 있었던 일 3초 안에 대답 못하면 기억 조작!</div>
                    <div className="main__title--sub2">내용 추가 예정!</div>
                </div>
                <button className="game__start">시작하기</button>
            </section>
            <div className="footer">copyright</div>
        </div>
        
    </MainWrap>

    );
}

function loading(){

}

export default Main;
