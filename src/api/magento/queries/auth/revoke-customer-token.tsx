export const REVOKE_AUTH_TOKEN = () => `
mutation RevokeCustomerToken {
    revokeCustomerToken {
        result
    }
}
`;