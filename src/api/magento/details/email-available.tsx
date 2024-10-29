export const EMAIL_AVAILABLE = () => `
    query{
  isCompanyEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}            
`;

