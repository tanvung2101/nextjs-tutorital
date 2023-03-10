import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    console.log(emailValue);

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Vui lòng nhập email đúng cú pháp");
    }

    try {
      const responese = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!responese.ok) throw new Error(`ERROR: ${responese.status}`);
      const data = await responese.json();
      setMessage(data.message);
      inputEmail.current.value = '';

      // POST fetch request
      // body emailValue and eventId
    } catch (e) {
      console.log("ERROR" + e);
    }
  };
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <form onClick={onSubmit} className="email_registration">
        <label htmlFor="">Get Registered for this event</label>
        <input
          ref={inputEmail}
          type="email"
          placeholder="Please insert your email"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
