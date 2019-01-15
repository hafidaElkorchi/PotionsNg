namespace PotionApi.Models
{
	using System;
	using System.Data.Entity;
	using System.ComponentModel.DataAnnotations.Schema;
	using System.Linq;

	public partial class PotionDb : DbContext
	{
		public PotionDb()
			: base("name=PotionDb")
		{
		}

		public virtual DbSet<Ingredient> Ingredient { get; set; }
		public virtual DbSet<Potion> Potion { get; set; }
		public virtual DbSet<potionIngredient> potionIngredient { get; set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Ingredient>()
				.Property(e => e.name)
				.IsFixedLength();

			modelBuilder.Entity<Ingredient>()
				.HasMany(e => e.potionIngredient)
				.WithRequired(e => e.Ingredient)
				.HasForeignKey(e => e.ingredient_id)
				.WillCascadeOnDelete(false);

			modelBuilder.Entity<Potion>()
				.Property(e => e.name)
				.IsFixedLength();

			modelBuilder.Entity<Potion>()
				.Property(e => e.effect)
				.IsFixedLength();

			modelBuilder.Entity<Potion>()
				.HasMany(e => e.potionIngredient)
				.WithRequired(e => e.Potion)
				.HasForeignKey(e => e.potion_id)
				.WillCascadeOnDelete(false);
		}
	}
}
