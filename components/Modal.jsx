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
		background-color: rgba(0, 0, 0, 0.3);
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
			color: #000000;
		}
	}

	.group-info {
		width: 338px;
		height: 169px;
		padding-top: 28px;
		padding-left: 28px;
		margin-top: 34px;
		background: #f4f4f4;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-y: scroll;
		color: #000000;
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: 400;

		&__box {
			display: flex;
			flex-direction: column;
		}

		&__name {
			display: flex;
			align-items: center;
			margin-bottom: 16px;
			font-size: 18px;
		}

		& p {
			display: inline;
			margin-left: 8px;
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

	label > input[type='radio'] + *::before {
		content: '';
		display: inline-block;
		vertical-align: center;
		width: 0.9rem;
		height: 0.9rem;
		margin-right: 8px;
		border-radius: 50%;
		border: 1.2px solid #767676;
	}

	label > input[type='radio'] {
		display: none;
	}

	label > input[type='radio']:checked + *::before {
		background: #ffaf02;
		border-color: #767676;
	}
	label > input[type='radio']:checked + * {
		border-color: #ffaf02;
	}
`;

const groups = [
	{
		groupIdx: 1,
		groupName: 'SOPT',
	},
];

const Modal = ({ isModalOpen, setIsModalOpen }) => {
	const [confirmClicked, setConfirmClicked] = useState(false);

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
							<div className="group-info__box">
								{groups.map(group => {
									return (
										<label key={group.groupIdx} value="value" className="group-info__name">
											<input name="group" type="radio" />
											<span>{group.groupName}</span>
										</label>
									);
								})}
							</div>
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
