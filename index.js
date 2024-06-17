import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import _db from './_db.js';

// types
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games() {
            return _db.games
        },
        game(_, args) {
            return _db.games.find((game) => game.id === args.id)
        },
        reviews() {
            return _db.reviews
        },
        review(_, args) {
            return _db.reviews.find((review) => review.id === args.id)
        },
        authors() {
            return _db.authors
        },
        author(_, args) {
            return _db.authors.find((author) => author.id === args.id)
        },
    },
    Game: {
        reviews(parent) {       
            return _db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {       
            return _db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Review: {
        game(parent) {
            return _db.games.find((game) => game.id === parent.game_id)
        },
        author(parent) {
            return _db.authors.find((author) => author.id === parent.author_id)
        }
    },
    Mutation: {
        deleteGame(_, args) {
            _db.games = _db.games.filter((game) => game.id !== args.id)
            return _db.games
        },
        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }

            _db.games.push(game)
            return game
        }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)