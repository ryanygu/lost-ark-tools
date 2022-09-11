import { BehaviorSubject } from 'rxjs';
import { API_URL } from '../config';
import { fetchWrapper, history } from '@/_helpers';
import { accountService } from '@/_services'

const baseUrl = `${API_URL}/faceting`

export const facetingService = {
    getFacetingHistory,
    saveFaceting,
};

function getFacetingHistory(id) {
    return fetchWrapper.get(`${baseUrl}/account/${id}`)
}


function saveFaceting(id, data) {
    return fetchWrapper.post(`${baseUrl}/${id}`, data)
        .then(user => {
            // update stored user if the logged in user updated their own record
            return accountService.refreshCurrentUser(user)
        });
}

// function update(id, params) {
//     return fetchWrapper.put(`${baseUrl}/${id}`, params)
//         .then(user => {
//             // update stored user if the logged in user updated their own record
//             if (user.id === userSubject.value.id) {
//                 // publish updated user to subscribers
//                 user = { ...userSubject.value, ...user };
//                 userSubject.next(user);
//             }
//             return user;
//         });
// }
