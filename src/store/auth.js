import firebase from 'firebase'
export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (error) {
                commit('setError', error)
                throw error
            }
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name
                })
            } catch (error) {
                commit('setError', error)
                throw error
            }
        },
        async getUid() {
            const user = await firebase.auth().currentUser
            return user ? user.uid : null
        },  
        async logout({commit}) {
            try {
                await firebase.auth().signOut() 
                commit('clearInfo')
            } catch (error) {
                error.message
            }
            
        }
    }
}