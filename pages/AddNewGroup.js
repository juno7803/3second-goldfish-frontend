import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const ModalWrapper = styled.div`
   .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
   }
   .modal {
      position: fixed;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 418px;
      height: 618px;
      top: 80px;
      background-color: #fff;
      border: solid 1px #707070;
      display: flex;
      justify-content: center;
      box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
   }
   .modal-form {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
         margin-top: 40px;
         margin-bottom: 22px;
         font-family: 'Noto Sans KR', sans-serif;
         font-weight: 700;
         font-size: 26px;
         color:#AAAAAA
      }
   }

   .group-info {
      width: 338px;
      height: 169px;
      margin-top: 34px;
      padding-left: 28px;
      background: #f4f4f4;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: auto;

      &__name {
         margin-bottom: 16px;
      }
   }

   .modal-buttons {
      width: 208px;
      display: flex;
      justify-content: space-between;

      & > button {
         width: 98px;
         height: 54px;
         border-radius: 20px;
         border: none;
         color: 767676;
         font-weight: bold;
         font-size: 18px;
         margin-top: 24px;
         cursor: pointer;
      }
   }

   .modal-buttons {
      &__confirm {
         background: #FFAF02;
         color:white;
      }

      &__cancel {
         background: #F6F6F6;
         border-radius: 20px;
         color: #767676;
      }
   }

   .modal-add-btn {
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: #ffaf02;
      margin-top: 16px;
      cursor: pointer;
   }
   .group-form{

      margin-top: 50px;
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #363636;

   }
   .group-detail-form{
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #363636;
      margin-top:10px;
            
   }
   .form-control{
      padding-left:21px;
      width:322px;
      height:45px;
      background: #FFFFFF;
      border: 1px solid #D6D6D6;
      box-sizing: border-box;
      border-radius: 10px;
      margin-top:10px;

   }
   .form-control-detail{
      font-family: inherit;
      font-size : inherit;
      font-weight: lighter;
      padding-left:21px;
      padding-top:18px;
      resize:none;
      margin-top:10px;
      width:322px;
      height:102px;
      background: #FFFFFF;
      border: 1px solid #D6D6D6;
      box-sizing: border-box;
      border-radius: 10px;

   }
`;


const AddNewGroup = () => {
   const handleConfirm = e => {
      e.preventDefault();
   };

   const handleCancel = e => {
      e.preventDefault();
   };

   return (
      <ModalWrapper>
         <div className="modal-overlay">
            <div className="modal">
               <div className="modal-form">
                  <div className="modal-form__title">새 그룹에 추가</div>
                  <Image src="/assets/images/MainLogo.png" alt="" width="158px" height="158px" />
                  <div class="group-form">그룹명<br/>
									<input type="text" class="form-control" placeholder="그룹명을 입력하세요." />
						</div>
                  <div class="group-detail-form">그룹 설명<br/>
									<textarea class="form-control-detail"  placeholder="그룹 설명을 입력하세요." />
						</div>
                  <div className="modal-buttons">
                     <button onClick={handleConfirm} className="modal-buttons__confirm">
                        확인
                     </button>
                     <button onClick={handleCancel} className="modal-buttons__cancel">
                        취소
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </ModalWrapper>
   );
};




export default AddNewGroup;