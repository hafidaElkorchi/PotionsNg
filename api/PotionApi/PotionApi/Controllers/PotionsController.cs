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
	public class PotionsController : ApiController
	{
		private PotionDb db = new PotionDb();

		// GET: api/Potions
		public IQueryable<Potion> GetPotion()
		{
			return db.Potion;
		}

		// GET: api/Potions/5
		[ResponseType(typeof(Potion))]
		public IHttpActionResult GetPotion(int id)
		{
			Potion potion = db.Potion.Find(id);
			if (potion == null)
			{
				return NotFound();
			}

			return Ok(potion);
		}

		// PUT: api/Potions/5
		[ResponseType(typeof(void))]
		public IHttpActionResult PutPotion(int id, Potion potion)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != potion.id)
			{
				return BadRequest();
			}

			db.Entry(potion).State = EntityState.Modified;

			try
			{
				db.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!PotionExists(id))
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

		// POST: api/Potions
		[ResponseType(typeof(Potion))]
		public IHttpActionResult PostPotion(Potion potion)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			db.Potion.Add(potion);
			db.SaveChanges();

			return CreatedAtRoute("DefaultApi", new { id = potion.id }, potion);
		}

		// DELETE: api/Potions/5
		[ResponseType(typeof(Potion))]
		public IHttpActionResult DeletePotion(int id)
		{
			Potion potion = db.Potion.Find(id);
			if (potion == null)
			{
				return NotFound();
			}

			db.Potion.Remove(potion);
			db.SaveChanges();

			return Ok(potion);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				db.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool PotionExists(int id)
		{
			return db.Potion.Count(e => e.id == id) > 0;
		}
	}
}