var app = app || {};

app.Plane = Backbone.Model.extend({
  relations: [{
         type: Backbone.HasMany,   // Type of relationship
         key: 'flights',            // How we reference the sub-models in collection
         relatedModel: 'Flight',    // The sub-model type
         collectionType: 'Flights',  // The sub-model collection
         reverseRelation: {
             key: 'belongsToPlane'            // Key we use to refer to the parent
         }
       }],

     urlRoot: "/planes" // Based around the REST url consistency (backbone expects this)

});
