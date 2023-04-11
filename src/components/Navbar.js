import styled from "styled-components";

const StatisticsCardContainer = styled.div`
	background-color: #fff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 16px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StatisticsCardTitle = styled.h3`
	font-size: 24px;
	margin: 0 0 8px 0;
`;

const StatisticsCardContent = styled.p`
	font-size: 48px;
	font-weight: bold;
	margin: 0;
`;

function StatisticsCard() {
    return (
			<div >
				<StatisticsCardContainer>
					<StatisticsCardTitle>Title</StatisticsCardTitle>
					<StatisticsCardContent>content</StatisticsCardContent>
				</StatisticsCardContainer>
				<StatisticsCardContainer>
					<StatisticsCardTitle>Title</StatisticsCardTitle>
					<StatisticsCardContent>content</StatisticsCardContent>
				</StatisticsCardContainer>
			</div>
		);
}

export default StatisticsCard;
