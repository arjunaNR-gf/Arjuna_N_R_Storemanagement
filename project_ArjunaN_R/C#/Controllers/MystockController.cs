using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StoreManagement.Models;

namespace StoreManagement.Controllers
{
	public class MystockController : ApiController
	{
		// GET api/<controller>
		StoreManagementEntities1 mst = new StoreManagementEntities1();
		
		public IEnumerable<Mystock> Get()
		{
			return mst.Mystocks.ToList();
		}

		// GET api/<controller>/5
		[HttpGet]
		public IEnumerable<Mystock> Get(String userid)
		{
			var l = from s in mst.Mystocks where s.Userid == userid select s;
			return l.ToList();
		}

		// POST api/<controller>
		public object Post(Mystock u)
		{
			try
			{

				mst.Mystocks.Add(u);
				mst.SaveChanges();
				return new Response
				{
					Status = "added",
				};

			}
			catch (Exception ex)
			{

				Console.Write(ex.Message);
				return new Response
				{
					Status = "Error",
				};

			}

		}

		// PUT api/<controller>/5
		public object Put(int pid, Mystock u)
		{
			try
			{
				if (pid == u.PId)
				{
					mst.Entry(u).State = System.Data.Entity.EntityState.Modified;
					mst.SaveChanges();
					return new Response
					{
						Status = "Updated",
					};

				}
				else
				{
					return new Response
					{
						Status = "opps",
					};

				}
			}
			catch (Exception e)
			{
				Console.Write("error");
			}

			return new Response
			{
				Status = "Error",
			};

		}

		public Response Delete(int PId)
		{
			Mystock u = mst.Mystocks.Find(PId);
			if (u != null)
			{
				mst.Mystocks.Remove(u);
				mst.SaveChanges();
				return new Response
				{
					Status = "deleted",
				};
				
			}
			else
			{
				return new Response
				{
					Status = "Not deleted",
				};
			}

			

		}
	}
}