import PropTypes from 'prop-types';
import { FeedbackButton, Wrapper } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const [typeGood, typeNeutral, typeBad] = options;
  return (
    <Wrapper>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(typeGood)}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(typeNeutral)}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(typeBad)}>
        Bad
      </FeedbackButton>
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

