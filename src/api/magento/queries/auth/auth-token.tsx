export const GET_AUTH_TOKEN = (email :string, password:string) => `
mutation GenerateCustomerToken {
    generateCustomerToken(password: "${password}", email: "${email}" ) {
        token
    }
}
`;