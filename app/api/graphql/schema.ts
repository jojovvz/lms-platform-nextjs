export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String
        email: String
        emailVerified: String
        password: String
        phone: String
        image: String
        bio: String
        userRole: String
        createdAt: String
    }

    type Course {
        id: ID!
        title: String!
        description: String!
        instructor: String!
        price: Float
        thumbnail: String!
        video: String
        studentsEnrolled: Int
        rating: Float
        createdAt: String
        updatedAt: String
        discount: Int
    }

    type Query {
        getUser(id: ID!): User
        getCourses: [Course]
    }

    type Mutation {
        createUser(name: String, email: String, password: String): User
        verifyUser(token: String): User
        onBoarding(bio: String, phone: String, image: String, userId: String): User
        forgotPassword(email: String): User
        resetPassword(password: String, token: String): User
        createCourse(title: String, description: String, instructor: String, price: Int, discount: Int thumbnail: String, video: String): Course
    }
`;
