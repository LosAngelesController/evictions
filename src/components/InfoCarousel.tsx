import React, { useState } from "react";
import classes from "./InfoCarousel.module.css";
interface CarouselProps {
  evictionData: any[];
  infoBoxLength: number;
  setInfoBoxLength: any;
  evictionInfo: number;
  setEvictionInfo: any;
}

export function InfoCarousel(props: CarouselProps) {
  const dataLength = props.evictionData.length;

  const handleNext = () => {
    props.setEvictionInfo((prev: any) =>
      prev === dataLength - 1 ? 0 : prev + 1
    );
    props.setInfoBoxLength((prev: any) => (prev === dataLength ? 1 : prev + 1));
  };

  const handlePrev = () => {
    props.setEvictionInfo((prev: any) =>
      prev === 0 ? dataLength - 1 : prev - 1
    );
    props.setInfoBoxLength((prev: any) => (prev === 1 ? dataLength : prev - 1));
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.arrow} onClick={handlePrev}>
        &#8249;
      </div>
      <div className={classes.content}>
        <>
          <div>
            <p className="pr-4">
              <b className="text-stone-400">Address:</b>{" "}
              {props.evictionData[props.evictionInfo]?.address} <br />
              <b className="text-stone-400">City:</b>{" "}
              {props.evictionData[props.evictionInfo]?.city} <br />
              <b className="text-stone-400">Zip Code:</b>{" "}
              {props.evictionData[props.evictionInfo]?.zip} <br />
              <b className="text-stone-400">Council District:</b>{" "}
              {props.evictionData[props.evictionInfo]?.cd} <br />
              <b className="text-stone-400">Eviction Category:</b>{" "}
              {props.evictionData[props.evictionInfo]?.evictionCategory} <br />
              <b className="text-stone-400">Notice Date:</b>{" "}
              {props.evictionData[props.evictionInfo]?.date} <br />
              <b className="text-stone-400">Notice Type:</b>{" "}
              {props.evictionData[props.evictionInfo]?.noticeType} <br />
              {/* <b className="text-stone-400">Current Monthly Rent:</b>{" "}
              {props.evictionData[props.evictionInfo]?.monthlyRent} <br /> */}
              <b className="text-stone-400">Rent Owed:</b>{" "}
              {props.evictionData[props.evictionInfo]?.rentOwed} <br />
              <b className="text-stone-400">Bedroom Count:</b>{" "}
              {props.evictionData[props.evictionInfo]?.bedroom} <br />
              <b className="text-stone-400">Cause:</b>{" "}
              {props.evictionData[props.evictionInfo]?.cause} <br />
            </p>
          </div>
          <div className="mt-3">
            <span>
              {props.infoBoxLength} of {dataLength}
            </span>
          </div>
        </>
      </div>
      <div className={classes.arrow} onClick={handleNext}>
        &#8250;
      </div>
    </div>
  );
}
