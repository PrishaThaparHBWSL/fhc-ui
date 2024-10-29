export const GET_DETAILS = () => `
    query Customer {
        customer {
            id
            firstname
            gender
            dob
            email
            lastname
            middlename
        }
    }              
`;



// export const GET_DETAILS = () => `
//     query customerOrders {
//         items {
//             order_number
//             id
//             created_at
//             grand_total
//             status
//         }
//     }              
// `;


