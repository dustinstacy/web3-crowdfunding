import React from 'react'
import { useNavigate } from 'react-router-dom'

import { loader } from '../assets';
import { FundCard, Loader } from '../components';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign})
    }

    return (
        <div className='ml-[12px]'>
            <h1 className='font-epilogue font-semibold text-[18px] text-white text-left ml-[12px]'>{title} ({campaigns.length})</h1>

            <div className='flex flex-wrap mt-[20px] gap-[26px]'>
                {isLoading && <Loader />}
                {!isLoading && campaigns.length === 0 && (
                    <p className='font-epilogue font-bold text-[14px] leading-[30px] text-[#818183]'> You have not created any campaigns yet</p>
                )}
                {!isLoading && campaigns.length > 0 && campaigns.map((campaign, i) =>
                    <FundCard
                        key={campaign.pId}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />
                )}

            </div>
        </div>
    )
}

export default DisplayCampaigns