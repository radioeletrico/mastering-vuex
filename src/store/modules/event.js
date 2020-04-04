import EventService from "../../services/EventService";

export const namespaced = true;

export const state = {
    events: [],
    eventsTotal: 0,
    event: {},
    perPage: 3,
};

export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event);
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
        state.eventsTotal = eventsTotal;
    },
    SET_EVENT(state, event) {
        state.event = event;
    }
};

export const actions = {
    createEvent({commit, dispatch}, event) {
        return EventService.postEvent(event).then(() => {
            commit('ADD_EVENT', event);

            const notification = {
                type: 'success',
                message: 'Your event has been created!'
            };

            dispatch('notification/add', notification, {root: true});

        }).catch(error => {
            const notification = {
                type: 'error',
                message: 'There was a problem adding the event: ' + error.message
            };

            dispatch('notification/add', notification, {root: true});
            throw error;
        });
    },
    fetchEvents({commit, dispatch, state}, {page}) {
        return EventService.getEvents(page, state.perPage)
            .then(response => {
                commit('SET_EVENTS', response.data);
                commit('SET_EVENTS_TOTAL', response.headers['x-total-count']);
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching events: ' + error.message
                };

                dispatch('notification/add', notification, {root: true});
            })
    },
    fetchEvent({commit, getters}, id) {
        let event = getters.getEventById(id);

        if (event) {
            commit('SET_EVENT', event);

            return event;
        } else {
            return EventService.getEvent(id)
                .then(response => {
                    commit('SET_EVENT', response.data);

                    return response.data;
                })
        }
    }
};

export const getters = {
    categoriesLength: state => {
        return state.categories.length;
    },
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
    },
    activeTodosCount: (state) => {
        return state.todos.filter(todo => !todo.done).length;
    },
    getEventById: state => id => {
        return state.events.find(event => event.id === id);
    },
};