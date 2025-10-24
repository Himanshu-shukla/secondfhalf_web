// This file contains mock data that will simulate the data you expect to receive from an API. It's like faking the data that the Vipuser component will use.

export const mockVipUsers = Array.from({ length: 15 }, (_, index) => ({
    userId: `user${index}`,
    name: `User ${index}`,
    currentCity: `City ${index}`,
    educationAndCareer: {
      jobTitle: `Job ${index}`,
      educationQualification: `Degree ${index}`
    },
    religiousBackground: {
      motherTongue: `Language ${index}`
    },
    profilePhoto: `photo${index}.jpg`
  }));