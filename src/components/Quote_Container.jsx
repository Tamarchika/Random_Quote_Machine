import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import url_constants from "../constants/url-constants";
import getQuotesData, { selectQuote } from "../redux/actions";
import {
  FaTwitterSquare,
  FaTumblrSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import "./Quote_Container_Style.scss";

const QuoteContainer = () => {
  const dispatch = useDispatch();
  const quoteData = useSelector((state) => {
    return state.quotes;
  });
  const showData = useCallback(() => {
    const randomQuoteData = Math.floor(Math.random() * quoteData.length);
    dispatch(selectQuote(randomQuoteData));
  }, [dispatch, quoteData.length]);
  useEffect(() => {
    dispatch(getQuotesData());
    showData();
  }, [dispatch, showData]);

  const selectedQuote = useSelector((store) => {
    return store.selectedQuote;
  });

  const colors = [
    "rgb(240, 61, 91)",
    "rgb(5, 88, 5)",
    "#FF5733",
    "#689D1F",
    "rgb(172, 109, 14)",
    "#855DC0",
    "rgb(18, 18, 156)",
    "#170057",
    "#900C3F",
    "#2C8DAA",
    "#C18E00",
    "#634ACE",
    "#000000",
    "#C10033",
    "FF4D00",
    "#9B6BC9",
    "#E634CC",
    "#A20839 ",
  ];
  let color = Math.floor(Math.random() * colors.length);
  document.body.style = `background-color: ${colors[color]}`;
  return (
    <div className="quote-container">
      <div className="quote-container_heading">
        {selectedQuote && (
          <>
            <h2 className="text" style={{ color: colors[color] }}>
              {selectedQuote.text}
            </h2>
            <h3 className="author" style={{ color: colors[color] }}>
              {selectedQuote.author}
            </h3>
          </>
        )}
        <div className="quote-container_buttons">
          <div className="quote-container_buttons_socials">
            <a
              id="twitter"
              href={url_constants.TWITTER}
              style={{ color: colors[color] }}
            >
              <FaTwitterSquare />
            </a>
            <a
              id="tumblr"
              href={url_constants.TUMBLR}
              style={{ color: colors[color] }}
            >
              <FaTumblrSquare />
            </a>
            <a
              id="facebook"
              href={url_constants.FACEBOOK}
              style={{ color: colors[color] }}
            >
              <FaFacebookSquare />
            </a>
          </div>
          <button
            type="button"
            className="quote-container_buttons_newQuote"
            onClick={showData}
            style={{ backgroundColor: colors[color] }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteContainer;
