import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <h3>На основании ваших ответов получен результат:</h3> <br/>
        {props.quizResult}<br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque sapien, porta non purus sed, interdum rutrum elit.
            Nam eleifend pharetra massa id gravida. Fusce tristique ornare tortor. Duis sit amet ex consequat, pharetra diam id, feugiat arcu.
            Donec gravida, elit at finibus molestie, diam ante fermentum purus, eu vulputate lorem justo id risus.
            Praesent at suscipit arcu, nec aliquet enim. Nam nulla massa, commodo ut velit sit amet, iaculis convallis odio.
            Curabitur nec enim sit amet erat vestibulum molestie. Nunc suscipit auctor mi, sed sodales felis ultricies sed.
            Aliquam sed orci aliquam quam dapibus condimentum vel vitae lectus. Nunc id mauris est. Suspendisse id egestas urna, eget rhoncus ex.
            Aliquam lacinia consectetur neque id ullamcorper. Praesent placerat in turpis in malesuada.
            Aliquam ullamcorper, velit vel fermentum bibendum, nunc nunc sollicitudin urna, id volutpat justo dolor vel ligula.
            Quisque non turpis et lorem vehicula fermentum.
        </p>
        <button
            className="button-red"
            type="button"
            onClick={(e) => {
              e.preventDefault();
                window.location.reload();
            }}
        > Спасибо, я пройду тест еще раз
        </button>
        <button
            className="button-green"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('#', '_blank');
            }}
          > Круто, хочу зарегистрироваться
        </button>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
