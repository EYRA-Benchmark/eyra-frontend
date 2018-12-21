import classNames from "classnames";
import * as React from "react";
import MailImage from "../../../../assets/images/mail.png";
import * as styles from "./Subscription.css";

interface IErrors {
  email: string[];
}

const validateHTML5Field = (field: HTMLInputElement) => {
  const errors = [];
  if (field.validationMessage !== "") {
    errors.push(field.validationMessage);
  }
  return errors;
};

const hasErrors = (errors: IErrors) => {
  return errors.email.length > 0;
};

interface IState {
  errors: IErrors;
  emailError: string;
}

class SubscriptionForm extends React.Component<{}, IState> {
  email: HTMLInputElement | null = null;

  state: IState = {
    errors: {
      email: []
    },
    emailError: ""
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    this.validateEmail(target);
    this.setState(prevState => {
      return {
        errors: {
          ...prevState.errors,
          email: validateHTML5Field(target)
        }
      };
    });
  };
  validateEmail = (field: HTMLInputElement) => {
    if (field.value === "") {
      this.setState({
        emailError: "Email is Required"
      });
    }
    if (field.validity.typeMismatch) {
      this.setState({
        emailError: "Invalid Email"
      });
    }
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState(
      prevState => {
        return {
          errors: {
            ...prevState.errors,
            email: validateHTML5Field(this.email!)
          }
        };
      },
      () => {
        if (!hasErrors(this.state.errors)) {
          alert("Valid form");
        } else {
          alert("Invalid form");
        }
      }
    );
  };

  render() {
    const { errors } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.mail}>
          <img src={MailImage} alt="Mail" />
        </div>
        <form
          onSubmit={this.handleSubmit}
          noValidate={true}
          className={styles.formContainer}
        >
          <span className={styles.title}>Stay in touch</span>
          <div
            className={classNames(
              styles.wrapInput,
              styles.validateInput,
              hasErrors(errors) && styles.alertValidate
            )}
            data-validate={this.state.emailError}
          >
            <input
              type="email"
              name="email"
              id="email"
              ref={email => (this.email = email)}
              onChange={this.handleEmailChange}
              required={true}
              minLength={5}
              className={styles.input1}
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.input1}
            placeholder="Name"
          />
          <input
            type="text"
            name="organization"
            id="organization"
            className={styles.input1}
            placeholder="Organization"
          />

          <div className={styles.buttonContainer}>
            <button className={styles.sendButton}>Subscibe</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SubscriptionForm;
