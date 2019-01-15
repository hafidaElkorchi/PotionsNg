using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using PotionApi.Models;

namespace PotionApi.Controllers
{
	[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
	public class potionIngredientsController : ApiController
	{
		private PotionDb db = new PotionDb();

		// GET: api/potionIngredients
		public IQueryable<potionIngredient> GetpotionIngredient()
		{
			return db.potionIngredient;
		}

		// GET: api/potionIngredients/5
		[ResponseType(typeof(potionIngredient))]
		public IHttpActionResult GetpotionIngredient(int id)
		{
			potionIngredient potionIngredient = db.potionIngredient.Find(id);
			if (potionIngredient == null)
			{
				return NotFound();
			}

			return Ok(potionIngredient);
		}

		// PUT: api/potionIngredients/5
		[ResponseType(typeof(void))]
		public IHttpActionResult PutpotionIngredient(int id, potionIngredient potionIngredient)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != potionIngredient.id)
			{
				return BadRequest();
			}

			db.Entry(potionIngredient).State = EntityState.Modified;

			try
			{
				db.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!potionIngredientExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return StatusCode(HttpStatusCode.NoContent);
		}

		// POST: api/potionIngredients
		[ResponseType(typeof(potionIngredient))]
		public IHttpActionResult PostpotionIngredient(potionIngredient potionIngredient)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			db.potionIngredient.Add(potionIngredient);
			db.SaveChanges();

			return CreatedAtRoute("DefaultApi", new { id = potionIngredient.id }, potionIngredient);
		}

		// DELETE: api/potionIngredients/5
		[ResponseType(typeof(potionIngredient))]
		public IHttpActionResult DeletepotionIngredient(int id)
		{
			potionIngredient potionIngredient = db.potionIngredient.Find(id);
			if (potionIngredient == null)
			{
				return NotFound();
			}

			db.potionIngredient.Remove(potionIngredient);
			db.SaveChanges();

			return Ok(potionIngredient);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				db.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool potionIngredientExists(int id)
		{
			return db.potionIngredient.Count(e => e.id == id) > 0;
		}
	}
}