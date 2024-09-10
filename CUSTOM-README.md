## 
Rewards Summary Page created for Balancee, as part of their requirements for employment.

### *Project Description:*

Company Statement:

  Our company is excited to announce a new task for aspiring ReactJS interns interested in creating a valuable feature within our [Balanceè platform](https://customer.balancee.app/). The focus of this task is to develop a Rewards Summary Page where customers can track their earnings, view their cashback history, and cash out their rewards, either directly or through promo codes. Customers earn 1.5% of their total booking amount whenever they make bookings on the customer dashboard and the task is to develop a page where all their earnings would show.
  
  ### *Task Objective:*
  
  The goal of this task is to design and develop a ReactJS component for the Rewards Summary page. This page will allow users to:
  
  1. Track their earnings from bookings made through the [Balanceè platform](https://business.balancee.app/).
  2. View a history of their cash back transactions.
  3. Cash out rewards either directly or by applying promo codes.
  4. Use dummy data where applicable, mock JSON response and focus on writing maintainable code.
  5. Make sure the UI looks good and you can use animations
  
  ### *Key Components of the Rewards Summary Page:*
  
  1. *Earnings Overview:*
      - Purpose: This section gives customers an overview of the total rewards or cashback they have earned through their bookings.
      - Details to Display:
          - Total Cashback Earned: Display the accumulated cashback from all bookings.
          - Current Balance: Show the amount of cashback currently available for use or withdrawal.
  2. *Cashback History:*
      - Purpose: Allows customers to view detailed information about their previous cashback transactions.
      - Details to Display:
          - Transaction Date: When the cashback was earned.
          - Amount Earned: The specific cashback amount from each transaction.
          - Booking Details: Brief information about the booking that generated the cashback (e.g., service name or booking ID).
  3. *Cashout Options:*
      - Purpose: Enables customers to utilize their earned rewards.
      - Cashout Methods:
          - Direct Cashout: An option for customers to withdraw their cashback directly to their bank account or as a discount on future bookings.
          - Promo Codes: Customers can choose to convert their cashback into promo codes which they can apply to future bookings.
       
###
Due to the company statement, you are directed to just the rewards summary route. That is where the work is done.

##
PROJECT DETAILS

###
Since the goal of the project was to develop a Rewards Summary Page/feature, the project did not involve recreating everything on Balancee.
Instead, I made my version of the root layout, while correcting a few errors. I created an extra route called the Rewards Summary, and put 3 extra child routes under it. The child routes were for the Earnings Overview, Cashback History and Cashout Rewards Page.

####
*Earnings Overview Page*
    The purpose of this page is mainly to show the total amount earned in cashbacks by the customers, and the current cashback balance. This page was therefore given a simple UI that shows the total amount earned in cashback, the current cashback balance, and the number of cashbacks collected by the customer. The page also holds 3 buttons: 1 to book more rewards to earn more cashbacks, 1 to view cashback history and 1 to  claim rewards earned.

*Cashback History Page*
    The Cashback History is arranged in form of a table with each column of the table showing the different properties of each Cashback object. The last column is a card that shows whether or not a cashback has been used or not. The cashbacks are not arranged to expire.

*Cashout Rewards Page*
    This page renders a form component. There are two form components, based on the mode of cashout the user selects. 
    With direct cashout mode, the user can get a fraction of the cashback points (about 0.8) as money to be sent to their bank account or as a discount on their next booking.
    With Get Promocode mode, a promo code can be sent to the user that he will use on to claim a free reward
