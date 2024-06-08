import React from "react";

function TweetForm() {
  const placeholder = "What are you humming about?";
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="newtweet">
      <form onSubmit={handleSubmit} method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={placeholder}></textarea>
        <input onSubmit={handleSubmit} type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;