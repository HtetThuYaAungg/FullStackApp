"use client"

import { ButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const Button = ({btnType,title,buttonStyles,textStyles,buttonIcon,isDisable,handleClick}:ButtonProps) => {
  return (
      <button
          disabled={isDisable}
          type={btnType || "button"}
          className={`custom-btn ${buttonStyles}`}
          onClick={handleClick}
      >
          <span className={`flex-1 ${textStyles}`}>
              {title}
          </span>
          {buttonIcon && (
              <div className='relative w-5 h-5'>
                  <Image
                      src={buttonIcon}
                      alt="icon"
                      fill
                      className='object-contain'
                  />
              </div>
          )}
    </button>
  )
}

export default Button
