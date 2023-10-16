export const userTransformer = (user) =>{
    return {
        id: user.name,
        name: user.name,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage
    }
}
