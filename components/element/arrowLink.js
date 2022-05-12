import CustomLink from "./customLink"

const ArrowLink = ({ text, url, newTab }) => {
  return (
  <CustomLink url={url} newTab={newTab}>
    <div className="flex items-center cursor-pointer">
      <p className="mr-[21px]">{text}</p>
      <div className="arrow ease-in-out duration-300">
        <svg
          width="43"
          height="21"
          viewBox="0 0 43 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_143_1039" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 10C9 10.2946 9.12792 10.5772 9.35563 10.7856C9.58334 10.9939 9.89218 11.111 10.2142 11.111L38.8525 11.111L31.2103 18.1011C30.9823 18.3097 30.8542 18.5926 30.8542 18.8876C30.8542 19.1827 30.9823 19.4656 31.2103 19.6742C31.4383 19.8828 31.7475 20 32.07 20C32.3924 20 32.7016 19.8828 32.9296 19.6742L42.6433 10.7866C42.7564 10.6834 42.8461 10.5608 42.9073 10.4258C42.9685 10.2908 43 10.1461 43 10C43 9.85387 42.9685 9.70918 42.9073 9.57421C42.8461 9.43924 42.7564 9.31664 42.6433 9.21344L32.9296 0.325802C32.8167 0.22251 32.6827 0.140574 32.5352 0.0846729C32.3877 0.0287716 32.2296 -4.70789e-07 32.07 -4.77767e-07C31.7475 -4.91861e-07 31.4383 0.117194 31.2103 0.325802C30.9823 0.534409 30.8542 0.817342 30.8542 1.11236C30.8542 1.40737 30.9823 1.69031 31.2103 1.89891L38.8525 8.88905L10.2142 8.88904C9.89218 8.88904 9.58334 9.00609 9.35563 9.21444C9.12792 9.42278 9 9.70536 9 10Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 10C9 10.2946 9.12792 10.5772 9.35563 10.7856C9.58334 10.9939 9.89218 11.111 10.2142 11.111L38.8525 11.111L31.2103 18.1011C30.9823 18.3097 30.8542 18.5926 30.8542 18.8876C30.8542 19.1827 30.9823 19.4656 31.2103 19.6742C31.4383 19.8828 31.7475 20 32.07 20C32.3924 20 32.7016 19.8828 32.9296 19.6742L42.6433 10.7866C42.7564 10.6834 42.8461 10.5608 42.9073 10.4258C42.9685 10.2908 43 10.1461 43 10C43 9.85387 42.9685 9.70918 42.9073 9.57421C42.8461 9.43924 42.7564 9.31664 42.6433 9.21344L32.9296 0.325802C32.8167 0.22251 32.6827 0.140574 32.5352 0.0846729C32.3877 0.0287716 32.2296 -4.70789e-07 32.07 -4.77767e-07C31.7475 -4.91861e-07 31.4383 0.117194 31.2103 0.325802C30.9823 0.534409 30.8542 0.817342 30.8542 1.11236C30.8542 1.40737 30.9823 1.69031 31.2103 1.89891L38.8525 8.88905L10.2142 8.88904C9.89218 8.88904 9.58334 9.00609 9.35563 9.21444C9.12792 9.42278 9 9.70536 9 10Z"
            fill="#101010"
            stroke="#E51E31"
            strokeWidth="4.44426"
            mask="url(#path-1-inside-1_143_1039)"
          />
          <circle cx="5.55638" cy="9.99949" r="1.11106" fill="#E51E31" />
          <circle cx="1.11106" cy="9.99949" r="1.11106" fill="#E51E31" />
        </svg>
      </div>
      </div>
  </CustomLink>
  )
}

export default ArrowLink