import { includes } from 'lodash';

const labelOutput = ({
  label,
  inline,
  input,
  touched,
  target,
  error,
}) => {
  if (label) {
    return (
      <div className="d-flex">
        <label ref={target} className={inline && `${inline[0]} col-form-label`}>
          {label}{' '}
        </label>
        {error &&
          (includes(error, '*') ? (
            <span
              className="invalid-feedback text-danger ml-2 mt-0"
              style={{
                display: 'inline-block',
                fontSize: '17px',
                width: 'fit-content',
              }}
            >
              *
            </span>
          ) : (
            <>
              <span
                className="invalid-feedback text-danger ml-2 mt-0"
                style={{
                  display: 'inline-block',
                  fontSize: '17px',
                  width: 'fit-content',
                }}
              >
                *
              </span>
            </>
          ))}
      </div>
    );
  }
  return '';
};

export const inputField = ({
  input,
  label,
  target,
  inline,
  size,
  placeholder,
  type,
  readOnly,
  feedback,
  className,
  groupClassName = 'form-group',
  helpBlock,
  children,
  meta: { asyncValidating, touched, error, warning },
}) => {
  const changeHandler = e => {
    input.onChange(e);
    if (typeof feedback === 'function') {
      feedback(e.currentTarget.value);
    }
  };

  const newGroupClassName = `${groupClassName} ${inline ? ' row' : ''} ${
    size ? ` form-group-${size}` : ''
  } ${asyncValidating ? 'async-validating' : ''}`;
  return (
    <div className={newGroupClassName}>
      {labelOutput({
        label,
        inline,
        input,
        error,
        target,
        touched,
      })}
      <div className={inline && inline[1]}>
        <input
          {...input}
          onChange={changeHandler}
          className={className}
          placeholder={placeholder}
          type={type}
          readOnly={readOnly}
          // style={{borderBottom: touched && error && "1px solid red"}}
        />
        <div>{children}</div>


            <div className="invalid-feedback" style={{ display: 'block', height: "16px"}}>
              {touched && error && error}
            </div>
          
        {helpBlock && <small className="help-block">{helpBlock}</small>}
      </div>
    </div>
  );
};

export const textareaField = ({
  input,
  label,
  tooltip,
  inline,
  placeholder,
  rows,
  feedback,
  className,
  groupClassName = 'form-group',
  helpBlock,
  style,
  meta: { asyncValidating, touched, error, warning },
}) => {
  const changeHandler = e => {
    input.onChange(e.currentTarget.value);
    if (typeof feedback === 'function') {
      feedback(e.currentTarget.value);
    }
  };
  const newGroupClassName = `${groupClassName} ${inline ? ' row' : ''} ${
    asyncValidating ? 'async-validating' : ''
  }`;

  return (
    <div className={newGroupClassName}>
      {labelOutput({
        label,
        tooltip,
        inline,
        input,
      })}
      <div className={inline && inline[1]}>
        <textarea
          {...input}
          onChange={changeHandler}
          className={className}
          placeholder={placeholder}
          style={style}
        />
        {touched &&
          ((error && (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              {error}
            </div>
          )) ||
            (warning && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {warning}
              </div>
            )))}
        {helpBlock && <small className="help-block">{helpBlock}</small>}
      </div>
    </div>
  );
};

