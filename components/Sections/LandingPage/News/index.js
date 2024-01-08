import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./customForm";
export default function News() {
  const url =
    "https://nuzzld.us17.list-manage.com/subscribe/post?u=9faf38e143882fa5c1344dc22&amp;id=0794217a97&amp;f_id=00ea53e0f0";
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
}
