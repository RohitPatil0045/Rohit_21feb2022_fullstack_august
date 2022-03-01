import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setComment('');
  };

  const validate = (values) => {
    const errors = {};
    if (values.length < 2) {
      errors.name = 'Must be greater than 2 Characters! ';
    } else if (values.length > 15) {
      errors.name = 'Must be less than 15 Characters!';
    }
    return errors;
  };

  const onchangename = (e) => {
    setName(e.target.value);
    setErrors(validate(name));
  };

  return (
    <>
      <div className=" container card my-3" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            class="btn btn-primary"
            data-bs-toggle="modal"
            to="#exampleModalToggle"
            role="button"
          >
            FeedBack
          </Link>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Give Feedback
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container my-3 ">
                <form id="myForm">
                  <legend>Submit Comment</legend>
                  <div className="mb-3">
                    <label for="disabledSelect" className="form-label">
                      Rating
                    </label>
                    <select
                      id="disabledSelect"
                      className="form-select"
                      onChange={(e) => setRating(e.target.value)}
                      value={rating}
                    >
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                    <div id="emailHelp" className="form-text">
                      Give the Rating Upto 5
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleName" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                      id="exampleInputName"
                      required
                      onChange={onchangename}
                      value={name}
                    />

                    <div id="emailHelp" className="form-text">
                      {errors.name}
                    </div>
                  </div>
                  <div className="mb-3 ">
                    <textarea
                      type="text"
                      placeholder="Please Enter Your Valuable Feedback..."
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                disabled={name.length < 2 || name.length > 15}
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                {name} says:
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>"name": {name}</p>
              <p>"Rating": {rating}</p>
              <p>"Comment": {comment}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                id="reset"
                onClick={handleSubmit}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
