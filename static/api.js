import { request } from "../plugins/axios";
export const getTagsRequest = () => {
    return request({
        url: "/api/tags",
        method: "GET"
    })
}

export const getArticlesRequest = (params = {}) => {
    return request({
        url: "/api/articles",
        method: "GET",
        params
    })
}

export const loginRequest = (data = {}) => {
    return request({
        url: "/api/users/login",
        method: "POST",
        data
    })
}

export const registerRequest = (data = {}) => {
    return request({
        url: "/api/users",
        method: "POST",
        data
    })
}

export const addFavRequest = (slug = "") => {
    return request({
        url: `/api/articles/${slug}/favorite`,
        method: "POST",
    })
}

export const delFavRequest = (slug = "") => {
    return request({
        url: `/api/articles/${slug}/favorite`,
        method: "DELETE",
    })
}

export const getProfileReqest = (username = "") => {
    return request({
        url: `/api/profiles/${username}`,
        method: "GET"
    })
}

export const followUser = (username = "") => {
    return request({
        url: `/api/profiles/${username}/follow`,
        method: "POST"
    })
}

export const unFollowUser = (username = "") => {
    return request({
        url: `/api/profiles/${username}/follow`,
        method: "DELETE"
    })
}

export const updateUserRequest = (data = {}) => {
    return request({
        url: "/api/user",
        method: "PUT",
        data
    })
}

export const crateArticleRequest = (data = {}) => {
    return request({
        url: "/api/articles",
        method: "POST",
        data
    })
}

export const getArticleRequest = (slug) => {
    return request({
        url: `/api/articles/${slug}`,
        method: "GET"
    })
}

export const getArticleComRequest = (slug) => {
    return request({
        url: `/api/articles/${slug}/comments`,
        method: "GET"
    })
}

export const delArticleRequest = (slug) => {
    return request({
        url: `/api/articles/${slug}`,
        method: "DELETE"
    })
}

export const addArticleComRequest = (data = {}, slug) => {
    return request({
        url: `/api/articles/${slug}/comments`,
        method: "POST",
        data
    })
}

