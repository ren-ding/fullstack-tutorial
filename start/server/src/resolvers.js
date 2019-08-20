module.exports = {
    Query: {
        launches: (parent, args, ctx, info) => ctx.dataSources.launchAPI.getAllLaunches(),
        launch: (parent, args, ctx, info) => ctx.dataSources.launchAPI.getLaunchById({launchId: args.id}),
        me: (parent, args, ctx, info) => ctx.dataSources.userAPI.findOrCreateUser()
    }
};