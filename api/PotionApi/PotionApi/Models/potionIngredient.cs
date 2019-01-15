namespace PotionApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("potionIngredient")]
    public partial class potionIngredient
    {
        public int id { get; set; }

        public int potion_id { get; set; }

        public int ingredient_id { get; set; }

        public virtual Ingredient Ingredient { get; set; }

        public virtual Potion Potion { get; set; }
    }
}
