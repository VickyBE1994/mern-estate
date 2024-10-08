import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full  sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Freal-estate&psig=AOvVaw2ZYu9TvZ5hNbx5R64sgmXS&ust=1726952597508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC28Pa10ogDFQAAAAAdAAAAABAE"
          }
          alt="listing cover"
          className="h-[320px] sm:h-220px w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3  flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-800" />
            <p className="text-sm text-gray-600 truncate">{listing.address}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 p-3 line-clamp-2">
          {listing.description}
        </p>
        <p className="text-slate-500 mt-2 p-3 font-semibold">
          ₹
          {listing.offer
            ? listing.discountprice.toLocaleString("en-US")
            : listing.regularprice.toLocaleString("en-US")}
          {listing.type === "rent" && " /month"}
        </p>
        <div className="text-slate-700 p-3 flex gap-4">
          <div className="font-bold text-xs">
            {listing.bedrooms > 1
              ? `${listing.bedrooms}beds`
              : `${listing.bedrooms}bed`}
          </div>
          <div className="font-bold  text-xs">
            {listing.bathrooms > 1
              ? `${listing.bathrooms}baths`
              : `${listing.bathrooms}bath`}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
