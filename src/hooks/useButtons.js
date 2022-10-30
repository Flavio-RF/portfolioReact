import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function useLoadingButton() {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [send, setSend] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSend(true);

    emailjs.sendForm(
      "service_wq26p31",
      "template_94hgaf4",
      form.current,
      "13WB63hDKw9UNH_Od"
    );
    e.target.reset();
  };

  return { isLoading, send, setIsLoading, setSend, form, sendEmail };
}
