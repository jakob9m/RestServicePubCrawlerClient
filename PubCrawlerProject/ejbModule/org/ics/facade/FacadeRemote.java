package org.ics.facade;

import javax.ejb.Remote;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

@Remote
public interface FacadeRemote {
    public Pub findPubName(String pubName);
    public Beer findBeerName(String beerName);
}
