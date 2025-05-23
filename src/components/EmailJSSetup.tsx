"use client";

import { useState } from "react";

export default function EmailJSSetup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 mt-2 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-medium text-blue-500 hover:text-blue-700 flex items-center"
      >
        <span>{isOpen ? "Hide" : "Show"} EmailJS Setup Instructions</span>
        <svg
          className={`ml-1 h-4 w-4 transform ${isOpen ? "rotate-180" : ""} transition-transform`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md text-sm">
          <h3 className="font-bold text-lg mb-2">Setting up EmailJS</h3>
          <ol className="list-decimal pl-4 space-y-2">
            <li>
              <a
                href="https://www.emailjs.com/docs/sdk/installation/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Create an EmailJS account
              </a>{" "}
              if you don't already have one.
            </li>
            <li>
              Create an Email Service (like Gmail, Outlook, etc.) in your EmailJS dashboard.
              Note the <strong>Service ID</strong>.
            </li>
            <li>
              Create an Email Template in your EmailJS dashboard. Use variables like{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                {"{{from_name}}"}
              </code>
              ,{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                {"{{reply_to}}"}
              </code>
              , and{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                {"{{message}}"}
              </code>{" "}
              in your template. Note the <strong>Template ID</strong>.
            </li>
            <li>
              Get your <strong>Public Key</strong> from your EmailJS dashboard under Account &gt; API Keys.
            </li>
            <li>
              Update the contact form component with your IDs:
              <pre className="bg-gray-800 text-white p-2 rounded mt-2 overflow-x-auto">
                const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
                <br />
                const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
                <br />
                const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
              </pre>
            </li>
          </ol>
          <div className="mt-4 p-2 bg-yellow-100 rounded">
            <strong>Note:</strong> Never expose your private keys. The public key is safe
            to use in client-side code.
          </div>
        </div>
      )}
    </div>
  );
}
