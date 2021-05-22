import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

const ModalWrapper = styled.div`
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(61, 61, 61, 0.479);
	}
	.modal {
		position: fixed;
		margin: 0 auto;
		left: 0;
		right: 0;
		width: 418px;
		height: 618px;
		top: 110px;
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
		}
	}

	.group-info {
		width: 338px;
		height: 169px;
		margin-top: 34px;
		padding-top: 28px;
		padding-left: 28px;
		background: #f4f4f4;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* overflow-y: scroll; */

		&__name {
			margin-bottom: 16px;
			font-size: 18px;
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
			&.clicked {
				color: #fff;
				background-color: #ffaf02;
			}
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
`;

const groups = [
	{
		groupIdx: 1,
		groupName: 'SOPT 1',
	},
	{
		groupIdx: 2,
		groupName: 'SOPT 2',
	},
	{
		groupIdx: 3,
		groupName: 'SOPT 3',
	},
	{
		groupIdx: 4,
		groupName: 'SOPT 4',
	},
	// {
	// 	groupIdx: 5,
	// 	groupName: '솝트 5',
	// },
];

const Modal = ({ isModalOpen, setIsModalOpen }) => {
	const [confirmClicked, setConfirmClicked] = useState(false);
	const [showForm, setShowForm] = useState(false);

	const handleConfirm = () => {
		setConfirmClicked(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	if (!isModalOpen) return null;
	return (
		<ModalWrapper>
			<div className="modal-overlay">
				<div className="modal">
					<div className="modal-form">
						<div className="modal-form__title">그룹에 공유</div>
						<Image src="/assets/images/ModalFish.svg" alt="" width="158px" height="158px" />
						<div className="group-info">
							{groups.map(group => {
								return (
									<div key={group.groupIdx} className="group-info__name">
										<input type="radio" />
										{group.groupName}
									</div>
								);
							})}
						</div>
						<div className="modal-buttons">
							<button onClick={handleConfirm} className={`modal-buttons__confirm ${confirmClicked ? 'clicked' : null}`}>
								확인
							</button>
							<button onClick={handleCancel} className="modal-buttons__cancel">
								취소
							</button>
						</div>
						<div className="modal-add-btn">+ 새 그룹 추가하기</div>
					</div>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default Modal;
