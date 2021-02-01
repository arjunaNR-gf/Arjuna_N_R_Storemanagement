using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StoreManagement.Models;

namespace StoreManagement.Controllers
{
	public class MyorderController : ApiController
	{
		// GET api/<controller>

		StoreManagementEntities4 smt = new StoreManagementEntities4();

		public IEnumerable<Myorder> Get()
		{
			return smt.Myorders.ToList();
		}

		// GET api/<controller>/5
		[HttpGet]
		public IEnumerable<Myorder> Get(String userid)
		{
			var l = from s in smt.Myorders where s.Userid == userid select s;
			return l.ToList();
		}

		[HttpGet]
		public IEnumerable<Myorder> Getorder(String TUserid)
		{
			var l = from s in smt.Myorders where s.TUserid == TUserid select s;
			return l.ToList();
		}

		// POST api/<controller>
		public object Post(Myorder u)
		{
			try
			{

				smt.Myorders.Add(u);
				smt.SaveChanges();
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
		public object Put(string userid, Myorder u)
		{
			try
			{
				if (userid == u.Userid)
				{
					smt.Entry(u).State = System.Data.Entity.EntityState.Modified;
					smt.SaveChanges();
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

		// DELETE api/<controller>/5
		public Response Delete(int Oid)
		{
			Myorder u = smt.Myorders.Find(Oid);
			if (u != null)
			{
				smt.Myorders.Remove(u);
				smt.SaveChanges();
				return new Response
				{
					Status = "delete"
				};
			}

			return new Response
			{
				Status = "Error"
			};

		}
	}
}