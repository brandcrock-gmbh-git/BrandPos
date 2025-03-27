import PersonalizedImage from '@/public/Personalized-Image.svg'
import Image from 'next/image'
import Button from './ButtonCustom'
import  IconType  from "@/public/ButtonIconBlue.svg"
import { useTranslations } from 'next-intl'
 
const PersonalisedSolution = () => {
  const tPersonalizedSolution =  useTranslations("personalizedSolution");
 
  return (
    <div className='container mx-auto px-4 pt-16 pb-0 '>
        <div className='bg-blue-default px-8 py-9 rounded-20 flex-col md:flex-row flex items-center'>
            <div className='w-1/2 flex justify-center sm:px-5 py-5'>
              <Image src={PersonalizedImage} alt="PersonalizedImage - BrandPos" width={380} height={240} />
            </div>
            <div className='w-full md:w-1/2 px-0 sm:pr-0 sm:pl-0 lg:px-14'>
              <div className='text-white text-2xl lg:text-3xl font-bold pb-5 w-full lg:w-3/4'> {tPersonalizedSolution("title")}</div>
              <div className='text-white text-16 font-normal lg:text-[18px] 00 pb-6'>{tPersonalizedSolution("Description")}</div>
              <Button type="submit"  icon={IconType} iconPosition="right" variant="primary" size="md">
              {tPersonalizedSolution("ButtonLabel")}
              </Button>
            </div>
        </div>
    </div>
  )
}

export default PersonalisedSolution